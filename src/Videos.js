import React from 'react';

import _ from 'lodash';

import Video from './Video';

import 'leaflet-layerindex';

import { vid_config, base_url, xy_to_bounds } from './vid_config';

export default class Videos extends React.Component {
  constructor(props) {
    super(props);

    this.alreadyIndexedIds = {};
    this.state = {
      visible: {}
    };

    this.calculateVisible = () => {
      const newVisible = {};
      this.props.map
        .search(this.props.bounds)
        .map(v => v.options.id)
        .forEach(url => {
          newVisible[url] = true;
        });
      if (!_.isEqual(newVisible, this.state.visible)) {
        this.setState({ visible: newVisible });
      }
    };

    this.index = leafletElement => {
      const id = leafletElement.options.id;
      if (this.alreadyIndexedIds[id]) {
        return;
      }
      this.props.map.indexLayer(leafletElement);
      this.alreadyIndexedIds[id] = true;
      this.calculateVisible();
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.calculateVisible();
    }
  }

  render() {
    const videos = [];
    this.props.videoLayout.forEach((vid, idx) => {
      const id = `${vid.filename}-${idx}`;
      const visible = id in this.state.visible;
      videos.push(
        <Video
          m3u8={`${base_url}${vid.filename}.m3u8`}
          id={id}
          key={id}
          bounds={xy_to_bounds(vid.x, vid.y)}
          debug={false}
          indexFunc={this.index}
          visible={visible}
          {...vid_config}
        />
      );
    });
    return <>{videos}</>;
  }
}
