const HeroButton = ({ label, onClick, type, disabled = false }) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`px-6 py-2 w-100 text-center hover:scale-105 active:scale-95 ${(type == "b") ? 'bg-transparent border-2 border-white text-white' : 'bg-white text-black'} text-3xl font-regular font-family-bmth-title uppercase transition-transform duration-300 ease-in-out ${disabled ? 'bg-gray-500 cursor-not-allowed' : ''}`}
        >
            {label}
        </button>
    )
}

export default HeroButton;
// Usage example:
// <Button label="Click Me" onClick={() => console.log('Button clicked!')} />
// <Button label="Disabled" onClick={() => console.log('This will not log')} disabled={true} />