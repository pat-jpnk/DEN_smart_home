import Container from '@material-ui/core/Container';
import React from 'react'

export default class Layout extends React.Component<{children : any}, {}> {

    constructor(props : any) {
        super(props);
    }

    render() {
        return (
            <Container maxWidth="xl">
                {this.props.children}
            </Container>
        )
    }
}
   
