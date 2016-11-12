import React from 'react';
import {mount} from 'react-mounter';
import {FlowRouter} from 'meteor/kadira:flow-router';

// import ProfileViewComponent from './components/ProfileViewComponent';
import MapViewComponent from './components/MapViewComponent';
FlowRouter.route('/', {
  name: 'home',
  action: () => {
    mount(MainLayout, {
      content: <MapViewComponent />
    });
  }
});

