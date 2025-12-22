import { Navigation } from "../components/nav";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profile-box">
      <Navigation />

      <div className="name-card">
        <div className="card-bg" />

        <div className="avatar" />
        <div className="name" />

        <div className="title" />
        <div className="description" />

        <div className="label" />
        <div className="line line-1" />
        <div className="line line-2" />
        <div className="line line-3" />
        <div className="line line-4" />
      </div>
    </div>
  );
}
