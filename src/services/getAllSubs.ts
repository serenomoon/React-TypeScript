import axios from 'axios';
import { Sub, SubsResponseFromApi } from '../types';

export const getAllSubs = () => {
    return fetchSubs().then(mapFromApiToSubs)
}

const fetchSubs = (): Promise<SubsResponseFromApi> => {
    // con fetch:
    // return fetch('http://localhost:3001/subs').then(res => res.json())

    // con axios:
    return axios
      .get('http://localhost:3001/subs')
      .then(response => response.data)
  }

const mapFromApiToSubs = (apiResponse: SubsResponseFromApi):
    Array<Sub> => {
      return apiResponse.map(subFromApi => {
        const {
          months: subMonths,
          profileUrl: avatar,
          nick,
          description
        } = subFromApi

        return {
          nick,
          description,
          avatar,
          subMonths
        }
      })
    }