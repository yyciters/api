import { ensureUser } from '../../middleware/validators'
import * as lyrics from './controller'

export const baseUrl = '/lyrics'

export default [
    {
        method: 'POST',
        route: '/create',
        handlers: [
            lyrics.createLyric
        ]
    },
    {
        method: 'GET',
        route: '/list',
        handlers: [
      // ensureUser,
            lyrics.listLyrics
        ]
    },
    {
        method: 'GET',
        route: '/read/:id',
        handlers: [
            ensureUser,
            lyrics.readLyric
        ]
    },
    {
        method: 'PUT',
        route: '/update/:id',
        handlers: [
            lyrics.readLyric,
            lyrics.updateLyric
        ]
    },
    {
        method: 'POST',
        route: '/update/multi',
        handlers: [
            lyrics.updateMultiLyrics
        ]
    },
    {
        method: 'DELETE',
        route: '/delete/:id',
        handlers: [
      // ensureUser,
            lyrics.deleteLyric
        ]
    },
    {
        method: 'POST',
        route: '/delete/multi',
        handlers: [
            lyrics.deleteMultiLyrics
        ]
    }
]
