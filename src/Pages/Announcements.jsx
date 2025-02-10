import BigHeader from "../Components/Headers/BigHeader";
import { ANNOUNCEMENTS } from "../Constants/Announcements";
import Announcement from "../Components/Announcements/Announcement";
import Navbar from "../Components/Navbar";

const Announcements = (props) => {
    return (
        <>
            <Navbar />
            <div
                id={props.name}
                ref={props.ref}
                className="flex flex-col items-center min-h-dvh gap-y-8 lg:px-24 pt-24 md:pt-24 p-4"
            >
                <BigHeader>
                    Duyurular
                </BigHeader>
                <div className="flex flex-col items-center gap-y-8 w-full max-w-4xl">
                    {ANNOUNCEMENTS
                        .sort((a, b) => new Date(b.postDate) - new Date(a.postDate))
                        .map((announcement, index) => (
                            <Announcement key={index} announcement={announcement} />
                        ))}
                </div>
            </div>
        </>
    );
};

export default Announcements;