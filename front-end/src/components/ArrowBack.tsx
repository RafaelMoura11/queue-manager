import { useNavigate } from 'react-router-dom';

const ArrowBack = () => {
    const navigate = useNavigate();

    const redirectToHome = () => {
        return navigate('/');
    }

    return (
        <div onClick={ redirectToHome } style={{ cursor: "pointer", width: "70px", height: "70px" }}>
                <span className="material-symbols-outlined">arrow_back</span>
        </div>
    )
}

export default ArrowBack;
