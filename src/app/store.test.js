import { store, toggleTabKeyForLap, toggleTabKeyForOth, toggleTabKeyForMob } from './store';

describe('tab key toggle reducers', () => {
  test('toggleTabKeyForLap toggles between "hidden" and ""', () => {
    expect(store.getState().tabKeyForLap).toBe('hidden');
    store.dispatch(toggleTabKeyForLap());
    expect(store.getState().tabKeyForLap).toBe('');
    store.dispatch(toggleTabKeyForLap());
    expect(store.getState().tabKeyForLap).toBe('hidden');
  });

  test('toggleTabKeyForOth toggles between "hidden" and ""', () => {
    expect(store.getState().tabKeyForOth).toBe('hidden');
    store.dispatch(toggleTabKeyForOth());
    expect(store.getState().tabKeyForOth).toBe('');
    store.dispatch(toggleTabKeyForOth());
    expect(store.getState().tabKeyForOth).toBe('hidden');
  });

  test('toggleTabKeyForMob toggles between "hidden" and ""', () => {
    expect(store.getState().tabKeyForMob).toBe('hidden');
    store.dispatch(toggleTabKeyForMob());
    expect(store.getState().tabKeyForMob).toBe('');
    store.dispatch(toggleTabKeyForMob());
    expect(store.getState().tabKeyForMob).toBe('hidden');
  });
});
