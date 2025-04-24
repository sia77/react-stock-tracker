const Footer = () =>{

    const year = () => {
        const today = new Date();
        return today.getFullYear();
    }

    return (
        <footer className="bg-stockTrackerBlack text-white h-20 text-sm flex justify-center items-center">
            <div>

            </div>
            <div>
                &copy;{year()}
            </div>
        </footer>
    )
}

export default Footer;