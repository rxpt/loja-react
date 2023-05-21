import Image from "react-bootstrap/Image";

function TeamMember({ picture, name, position, bio }) {
  return (
    <>
      <Image src={picture} thumbnail roundedCircle />
      <h4>{name}</h4>
      <div className="lead">{position}</div>
      <p>{bio}</p>
    </>
  );
}

export default TeamMember;
