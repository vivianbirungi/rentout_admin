import instance from '../../config';

const getProperties = async () => {
  const response = await instance.get('properties');
  return response.data;
};

const deletePropertyApi = async (property_id) => {
  const response = await instance.get(`deleteProperty/${property_id}`);
  return response.data;
};

export default { getProperties, deletePropertyApi };
