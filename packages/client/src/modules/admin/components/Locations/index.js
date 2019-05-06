import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table } from '../../../common/components/web';

const SelectLocationString = 'Please select a location';
const columns = [
  {
    title: <a href="#">Name</a>,
    dataIndex: 'node',
    key: 'name',
    // eslint-disable-next-line
    render: (text, record) => (
      <div>
        <Link to={{ pathname: `/admin/locations/${record.node.handle}` }}>{text}</Link>
      </div>
    )
  }
];
export default class LocationsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedLocation: SelectLocationString
    };
  }
  componentDidMount() {
    // console.log('MOUNTING PROPS::', this.props);
    // this.setState({ selectedLocation: dealers.edges[0].node.name });
  }
  componentDidUpdate(prevProps) {
    // if (this.props.dealers) {
    //   console.l/og('WE HAVE DEALERS');
    // }
    if (prevProps.loadingDealers !== this.props.loadingDealers) {
      const { dealers } = this.props;
      // console.log('COMPONENT DID UPDATE::', dealers.edges[0].node);
      this.setState({ selectedLocation: dealers.edges[0].node.name });
    }
    return;
  }
  handleSelectedLocation = e => {
    return this.setState({ selectedLocation: e.target.value });
  };
  handleInitialLocation = location => {
    // console.log('LOCATION::', location);
    this.setState({ selectedLocation: location });
  };
  render() {
    // const { selectedLocation } = this.state;
    const { loadingDealers, dealers } = this.props;
    if (loadingDealers) {
      return <div>Loading</div>;
    }
    /*
    {dealers.edges.length == 0 ? (
      <AddDealer {...this.state} {...this.props} />
    ) : (
      <DealerForm {...this.state} {...this.props} />
    )}

    */
    // console.log('THE RENDER PROPS:::', dealers.edges.length);
    return (
      <div className={'admin__page__view admin__locations'}>
        <Table dataSource={dealers.edges} columns={columns} />
      </div>
    );
  }
}

LocationsView.propTypes = {
  children: PropTypes.node,
  updateDealer: PropTypes.func,
  dealers: PropTypes.object,
  loadingDealers: PropTypes.bool
};
