import Header from "./Header";
import Menu from "./Menu";

function Main(props) {
    return (
        <div>
            <div className="fixed w-full">
                <Header />
            </div>
            <div className="px-3 pt-16">
                <h2 className="text-lg mb-3 border-b border-yellow-100">Menu</h2>
                <Menu />
            </div>
        </div>
    )
}

export default Main;