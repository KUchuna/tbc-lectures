export default function Profile() {
    return (
        <div className="profile-page-container">
            <div className="profile-info-container">
                <span>name surname</span>
                <span>example@example.com</span>
            </div>
            <div className="password-change-container">
                <input type="text" placeholder="Enter new password" />
                <input type="text" placeholder="Confirm your password" />
                <button>Submit</button>
            </div>
        </div>
    )
}