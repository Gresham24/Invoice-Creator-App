const StyledInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    & span {
        color: red;
        font-size: 0.8rem;
        /* margin-left: 10px; */
    }
    & label {
        display: flex;
        flex-direction: column;
    }
`;

export default ({ label, type, inputName, value, onChange, errors = [] }) => {
    return (
        <StyledInput>
            <label>
                {label}
                <input type={type} name={inputName} id={inputNume} value={value} onChange={onChange} />
            </label>
            {errors.map((error, index) => (
                <span key={index}>{error}</span>
            ))}
        </StyledInput>
    )
}