import React from "react";
import { Header } from 'semantic-ui-react'

function Dropdown(props) {
    return (
        <>
            <Dropdown
                className='icon'
                text={
                    <Header size='small'>{`${this.props.name}'s`}</Header>
                }
                item
                header
            >
                <Dropdown.Menu>
                    <Dropdown.Item icon='user' text='Profile' href='/profile' />
                    <Dropdown.Item icon='sign-out' text='Sign out' onClick={this.logout} />
                </Dropdown.Menu>
            </Dropdown>
        </>
    )
}
export default Dropdown;