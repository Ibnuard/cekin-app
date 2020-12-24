import * as React from 'react';
import {CreateTabBar, DailyAbsenStack} from '../../navigator/Navigator';

const AdminHome = ({navigation}) => {
  const configuration = [
    {
      name: 'DailyAbsen',
      component: DailyAbsenStack,
      title: 'Absen Harian',
    },
    {
      name: 'EventAbsen',
      component: DailyAbsenStack,
      title: 'Absen Acara',
    },
  ];

  return (
    <>
      <CreateTabBar config={configuration} />
    </>
  );
};

export default AdminHome;
