import { people } from "../data/data.js";
import { getImageUrl } from "../data/utils.js";
import Profile from "./Profile.js";

export default function List() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const everyoneElse = people.filter(
    (person) => person.profession !== "chemist"
  );
  return (
    <article>
      <h1>Scientists</h1>
      <h2>Chemists</h2>
      <ul>
        {chemists.map((person) => (
          <Profile key={person.id} person={person} />
        ))}
      </ul>
      <h2>Everyone Else</h2>
      <ul>
        {everyoneElse.map((person) => (
          <Profile key={person.id} person={person} />
        ))}
      </ul>
    </article>
  );
}
