import instance from '../../../config';

const getProperties = async() => {
    const response = await instance.get('properties'
    );
    return response.data;
  };
const editProperty = async() => {

}
const deleteProperty = async() => {}
const fetchPropertyDetail = async(propertyId) =>
{}
export default {getProperties};


