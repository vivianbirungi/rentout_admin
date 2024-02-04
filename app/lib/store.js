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
        set((state) => ({ ...state, tenants: results }));
      },

      getLandlords: async () => {
        const results = await instance.get(`get_Users/landlord`);
        set((state) => ({ ...state, landLords: results }));
      },

      getSubscriptions: async () => {
        const results = await instance.get('get_subscriptions');
        console.log(results);
        set((state) => ({ ...state, subscriptions: results.data.results }));
      },

      setActiveUser: (userId, userType) => {
        let user = null;

        if (userType === 'tenant') {
          user = get().tenants.find((tenant) => tenant.userId === userId);
        } else {
          user = get().landLords.find((landLord) => landLord.userId === userId);
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
