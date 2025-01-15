import { gql, useQuery } from "@apollo/client";

export function DisplayLocations() {
  const GET_LOCATIONS = gql`
    query GetLocations {
      locations {
        id
        name
        description
        photo
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_LOCATIONS);
  const dataPrepared = data?.locations || [];

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error : {error.message}</p>;
  }

  return (
    <>
      {dataPrepared.map(({ description, id, name, photo }) => (
        <div key={id}>
          <h3>{name}</h3>
          <img
            alt="location-reference"
            height="250"
            src={`${photo}`}
            width="400"
          />
          <br />
          <b>About this location:</b>
          <p>{description}</p>
          <br />
        </div>
      ))}
    </>
  );
}
