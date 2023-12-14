import { NextPage } from 'next';

import { CardDashboard } from '@/components/Container';
import CreateEmployeeForm from '@/components/form/CreateEmployeeForm';

const Home: NextPage<unknown> = () => {
  return (
    <CardDashboard title="Tambah Karyawan">
      <CreateEmployeeForm />
    </CardDashboard>
  );
};

export default Home;
