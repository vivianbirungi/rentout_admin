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
        console.log(results)
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

      setActiveProperty: (propertyId) => {
        let property = get().properties.find(
          (property) => property.prop_id === propertyId
        );
        set((state) => ({ ...state, activeProperty: property }));
      },
    }),
    {
      name: 'rentalynk',
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useRLStore;
