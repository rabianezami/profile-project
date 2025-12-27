import ProfilePage from "./components/ProfilePage";
import avatarImage from "./assets/avatar.jpg";

export default function App() {
  const user = {
    name: "Rabia Zia Nezai",
    username: "@rabianezami",
    avatarImage,
    xp: 80,
    lastActive: "Dec 24, 2025",
    streakDays: 2,
    longestStreak: 3,
    recentBadgesText: "No badges earned yet.",
    personalInfo: {
      Email: "rabianezami786@gmail.com",
      Gender: "Famle",
      Country: "Afghanistan",
      "Province or State": "Parwan",
      "Date Of Birth": "2/8/2001",
      "Online Portfolio Link": "N/A",
      "LinkedIn Link": "https://www.linkedin.com/in/rabia-zia-nezami-993989379/",
      Languages: "farsi, english",
      Bio: "Student @CodeToInspire",
    },
    accountDetails: {
      Role: "Student",
      Status: "Active",
      Verification: "Verified",
    },
  };

  return (
    <div className="min-h-screen bg-[#0b1220] text-gray-200 p-6 font-sans">
      <ProfilePage user={user} />
    </div>
  );
}
