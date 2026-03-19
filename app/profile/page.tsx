import { Navigation } from "../components/nav";
import "./profile.css";
import Image from "next/image";

export default function Profile() {
  return (
    <div className="profile-box">
      <Navigation />

      <div className="profile-wrapper">
        <div className="name-card">
          <div className="name-card-left">
            <div className="name-card-header">
              <span className="name-card-meta">AVAILABLE</span>
            </div>

            <h2 className="name-card-title">AS7AR</h2>
            <p className="name-card-role">Full-stack Developer</p>

            <p className="name-card-desc">
              Structure, performance, and maintainability focused web systems and tools.
            </p>

            <div className="name-card-stack">
              <span>TypeScript/JavaScript [ 9/10 ]</span>
              <span>React [ 8/10 ]</span>
              <span>Next.js [ 8/10 ]</span>
              <span>Go [ 7/10 ]</span>
              <span>Node.js [ 7/10 ]</span>
              <span>Python [ 8/10 ]</span>
              <span>Kotlin/Java [ 9/10 ]</span>
            </div>
          </div>

          <div className="name-card-right">
            <Image
              src="/profile.png"
              alt="profile"
              width={220}
              height={220}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}