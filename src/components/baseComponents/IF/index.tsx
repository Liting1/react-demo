interface Props {
    test: boolean
    children: any
}

const IF = (props:Props) => {
    return props.test ? props.children: null
}

IF.defaultProps = {
    test: false
}

export default IF;
