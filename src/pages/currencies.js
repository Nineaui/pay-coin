import { Table, Divider, Tag, Button } from 'antd';
import React, { Component } from 'react';
import axios from 'axios';
const { Column, ColumnGroup } = Table;

class Currencies extends React.Component {

  state = {
    res: [],
  }

  componentDidMount() {
    axios.get("http://localhost:8000/api/currencies").then((res) =>
    {
    this.setState({res: res.data});
  }
  )}

  render(){

    return(<div className="main">
    <Table dataSource={this.state.res}>
      <ColumnGroup title="Coin">
        <Column
          title="Symbol"
          dataIndex="symbol"
          key="symbol"
        />
        <Column
          dataIndex="url"
          key="url"
          render={(text, record) => <img src={record.url} style={{height: '30px'}}/>}
        />
        <Column
          title="Coin Name"
          dataIndex="coinname"
          key="coinname"
          render={coinname => (
            <a href="/coin">{coinname}</a>
          )}
        />
      </ColumnGroup>
      <Column
        title="Price(USD)"
        dataIndex="price"
        key="price"
        sorter={(a, b) => a.price - b.price}
      />
      <Column
        title="1 Hour(%)"
        dataIndex="hour"
        key="hour"
        render={hour => (
          <span style={{color: 'red'}}>{hour}</span>
        )}
        sorter={(a, b) => a.hour - b.hour}
      />
      <Column
        title="1 Day(%)"
        dataIndex="day"
        key="day"
        sorter={(a, b) => a.day - b.day}

      />
      <Column
        title="1 Week(%)"
        dataIndex="week"
        key="week"
        render={week => (
          <span style={{color: 'green'}}>{week}</span>
        )}
        sorter={(a, b) => a.week - b.week}

      />
      <Column
        title="Market Cap(USD)"
        dataIndex="cap"
        key="cap"
        sorter={(a, b) => a.cap - b.cap}
      />
      <Column
        title="24h Volume(USD)"
        dataIndex="vol"
        key="vol"
        sorter={(a, b) => a.vol - b.vol}
      />
      <Column
        title="Supply(Cir|Max)"
        key="supply"
        render={(text, record) => (
          <span>
            <span>{record.supply[0]}</span>
            <Divider type="vertical" />
            <span>{record.supply[1]}</span>
          </span>
        )}
      />
    </Table></div>);
  }
}


export default Currencies;
