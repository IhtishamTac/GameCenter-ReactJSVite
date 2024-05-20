import '../assets/css/loading.css';
export const LoadingAnimation = () => {
    return (
        <div className="containers">
            <div className="wrapbox">
                <div className="d-flex">
                    <div className="cube1"></div>
                    <div className="cube2"></div>
                </div>
                <div className="d-flex">
                    <div className="cube3"></div>
                    <div className="cube4"></div>
                </div>
            </div>
            <h2 className="ml-5">Please wait...</h2>
        </div>
    )
}