import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import instance from '../../config';

const useRLStore = create(
  persist(
    (set, get) => ({
      properties: [],
      tenants: [],
      landLords: [],
      subscriptions: [],
      activeUser: null,
      activeProperty: null,
      fetchingProfile: false,

      getProperties: async () => {
        const response = await instance.get('get_Properties');
        set((state) => ({ ...state, properties: response.data.results }));
      },

      getTenants: async () => {
        const results = await instance.get(`get_Users/tenant`);
        
        set((state) => ({ ...state, tenants: results.data }));
      },

      getLandlords: async () => {
        const results = await instance.get(`get_Users/landlord`);
       

        set((state) => ({ ...state, landLords: results.data }));
      },

      getSubscriptions: async () => {
        const results = await instance.get('get_subscriptions');
       
        set((state) => ({ ...state, subscriptions: results.data.results }));
      },
     
      setActiveUser: (userId, userType) => {
        let user = null;
        if (userType === 'tenant') {
          user = get().tenants.results.find((tenant) => tenant.user_id === userId);
        } else {
          user = get().landLords.results.find((landLord) => landLord.user_id === userId);
        }
        
        set((state) => ({ ...state, activeUser: user }));
      },

      setActiveProperty: async (propertyId) => {
        set((state) => ({ ...state, fetchingProfile: true }));

        let property = get().properties.find(
          (property) => property.property_id === propertyId
        );

        const response = await instance.get(
          `get_property_profile/${propertyId}`
        );

        set((state) => ({
          ...state,
          activeProperty: { ...property, units: response.data.units },
          fetchingProfile: false,
        }));
      },
    }),
    {
      name: 'rentalynk',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useRLStore;
