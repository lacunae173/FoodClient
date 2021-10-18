function Header(props) {
    return (
        <div className="flex justify-between p-3 bg-yellow-200">
           <h2 className="font-bold text-xl">Food</h2>
           <div>
                <span><svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg></span>
            </div> 
        </div>
    )
}

export default Header;