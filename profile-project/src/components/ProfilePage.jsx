import TopHeader from "./TopHeader";
import StatCard from "./StatCard";
import PersonalInfoCard from "./PersonalInfoCard";
import AccountDetailsCard from "./AccountDetailsCard";

export default function ProfilePage({ user }) {
  return (
    <div className="max-w-[1100px] mx-auto">
      <TopHeader
        name={user.name}
        username={user.username}
        avatarImage={user.avatarImage}
      />

      <div className="mt-4 grid grid-cols-3 gap-4 max-[900px]:grid-cols-1">
        <StatCard
          title="XP"
          bigValue={user.xp}
          footerText={`Last active: ${user.lastActive}`}
        />
        <StatCard
          title="STREAK"
          bigValue={`${user.streakDays} days`}
          footerText={`Longest streak: ${user.longestStreak} days`}
          icon="🔥"
        />
        <StatCard
          title="RECENT BADGES"
          footerText={user.recentBadgesText}
          icon="✨"
        />
      </div>

      <div className="mt-4 grid grid-cols-[1.2fr_0.8fr] gap-4 max-[900px]:grid-cols-1">
        <PersonalInfoCard info={user.personalInfo} />
        <AccountDetailsCard details={user.accountDetails} />
      </div>
    </div>
  );
}
