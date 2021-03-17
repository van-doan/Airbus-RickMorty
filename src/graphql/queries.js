import { gql, useQuery } from '@apollo/client'

export const GET_CHARACTERS = gql` 
      query characters {
        characters{
          results {
            id
            name
            status
            species
            gender
            origin {
              name
              dimension
            }
            location {
              name
              dimension
              residents {
                id
                name
              }
            }
            episode {
              id
              name
            }
            image
          }
        }
      } 
    `

// // For episode filter dropdown
// export const GET_EPISODES = gql` 
//   query episodes {
//     episodes {
//       results {
//         name
//         episode
//         characters {
//           id
//         }
//       }
//     }
//   }
// `
