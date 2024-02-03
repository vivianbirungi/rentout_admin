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
          user = get().tenants.results.find((tenant) => tenant.user_d === userId);
        } else {
          user = get().landLords.results.find((landLord) => landLord.user_id === userId);
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
