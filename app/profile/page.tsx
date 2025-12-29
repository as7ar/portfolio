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
            <p className="name-card-role">Full-stack / Minecraft Developer</p>

            <p className="name-card-desc">
              Minecraft plugins, web systems, and tools focused on structure,
              performance, and maintainability.
            </p>

            <div className="name-card-stack">
              <span>TypeScript/JavaScript [ 7/10 ]</span>
              <span>React [ 7/10 ]</span>
              <span>Next.js [ 7/10 ]</span>
              <span>C# [ 3/10 ]</span>
              <span>Node.js [ 5/10 ]</span>
              <span>Rust [ 2/10 ]</span>
              <span>Python [ 8/10 ]</span>
              <span>Kotlin/Java [ 9/10 ]</span>
              <span>Minecraft Plugin [ 9/10 ]</span>
              <span>Minecraft Modding [ 3/10 ]</span>
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
