import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getHouses, deleteHouse } from '../../actions/houses';

export class Houses extends Component {
    static PropTypes = {
        houses: PropTypes.array.isRequired,
        getHouses: PropTypes.func.isRequired,
        deleteHouse: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.props.getHouses();
    }

    render() {
        return (
            <Fragment>
            <h2>Houses</h2>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Message</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {this.props.houses.map((house) => (
                  <tr key={house.id}>
                    <td>{house.id}</td>
                    <td>{house.name}</td>
                    <td>{house.email}</td>
                    <td>{house.message}</td>
                    <td>
                      <button
                        onClick={this.props.deleteHouse.bind(this, house.id)}
                        className="btn btn-danger btn-sm"
                      >
                        {' '}
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    houses: state.houses.houses
});

export default connect(mapStateToProps, { getHouses, deleteHouse })(Houses);
