
const Name = () => {
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value);
    }

    return (
        <div style= {{padding: '16px', backgroundColor: 'gray' }}>
            <label htmlFor="name">이름</label>
            <input id="name" className="input-name" type="text" onChange={onChange} />
        </div>
    )
}

export default Name