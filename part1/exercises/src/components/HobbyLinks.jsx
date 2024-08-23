export default function HobbyLinks() {
    let pageTitle = "My Hobbies";
    const hobbyLinks = ["https://coinmarketcap.com/", "https://thedyrt.com/camping/missouri/near/st-louis"];
    return (
        <div>
        <a href = {hobbyLinks[0]}>coinmarketcap</a>
        <a href = {hobbyLinks[1]}>camping</a>
        </div>
    );
}
