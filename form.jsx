import React, { useState } from 'react';

const Form = () => {
    const [fields, setFields] = useState({});

    return (
        <form onSubmit={() => { utils.updateServer(fields); closeModal(); }}>
            <input value={myFirstValue} onChange={(e) => setFields({ ...fields, myFirstValue: e.target.value })} />
            <input value={mySecondValue} onChange={(e) => setFields({ ...fields, mySecondValue: e.target.value })} />
            <input name="submit"/>
        </form>
    )
}