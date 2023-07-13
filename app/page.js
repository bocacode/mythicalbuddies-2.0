import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import MeetTheBuddies from "@/components/MeetTheBuddies/MeetTheBuddies";
import Mission from "@/components/Mission/Mission";
import Team from "@/components/Team/Team";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <MeetTheBuddies />
      <Team />
      <Mission />
      <Footer />
    </div>
  )
}
