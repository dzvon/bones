window.SIDEBAR_ITEMS = {"derive":[["Deref","Implements `Deref` for single-item structs. This is especially useful when utilizing the newtype pattern."],["DerefMut","Implements `DerefMut` for single-item structs. This is especially useful when utilizing the newtype pattern."],["TypeUlid","Derive macro for the `TypeUlid` trait."]],"enum":[["EcsError","The types of errors used throughout the ECS."]],"fn":[["create_bitset","Creates a bitset big enough to contain the index of each entity. Mostly used to create caches."]],"macro":[["bitor","Shorthand for combining bitsets with bit_or."],["bitset","Shorthand for setting bits on the bitset container."],["impl_bitset","Implements the `BitSet` trait members for your type through `DerefMut`."],["join","The join macro makes it very easy to iterate over multiple components of the same `Entity` at once."]],"struct":[["AtomicComponentStore","A typed, wrapper handle around [`UntypedComponentStore`] that is runtime borrow checked and can be cheaply cloned. Think can think of it like an `Arc<RwLock<ComponentStore>>`."],["AtomicComponentStoreRef","A read-only borrow of [`AtomicComponentStore`]."],["AtomicComponentStoreRefMut","A mutable borrow of [`AtomicComponentStore`]."],["AtomicRef","A wrapper type for an immutably borrowed value from an `AtomicRefCell<T>`."],["AtomicRefCell","A threadsafe analogue to RefCell."],["AtomicRefMut","A wrapper type for a mutably borrowed value from an `AtomicRefCell<T>`."],["AtomicResource","A handle to a resource from a [`Resources`] collection."],["BitFmt","BitSet formatter."],["BorrowError","An error returned by `AtomicRefCell::try_borrow`."],["BorrowMutError","An error returned by `AtomicRefCell::try_borrow_mut`."],["ComponentBitsetIterator","Read-only iterator over components matching a given bitset"],["ComponentBitsetIteratorMut","Mutable iterator over components matching a given bitset"],["ComponentStore","A typed wrapper around [`UntypedComponentStore`]."],["ComponentStores","A collection of [`ComponentStore<T>`]."],["Dispatcher","A dispatcher is used to execute a collection of `System` in order."],["DispatcherBuilder","A builder that accumulates systems to be inserted into a [`Dispatcher`]."],["Entities","Holds a list of alive entities."],["Entity","An entity index."],["EntityIterator","Iterator over entities using the provided bitset."],["Res","[`SystemParam`] for getting read access to a resource."],["ResMut","[`SystemParam`] for getting mutable access to a resource."],["Resources","A collection of resources."],["System","Struct used to run a system function using the world."],["TypedComponentOps","Implements typed operations on top of a [`UntypedComponentStore`]."],["Ulid","A Ulid is a unique 128-bit lexicographically sortable identifier"],["UntypedComponentBitsetIterator","Iterates over components using a provided bitset. Each time the bitset has a 1 in index i, the iterator will fetch data from the storage at index i and return it as an `Option`."],["UntypedComponentBitsetIteratorMut","Iterates over components using a provided bitset. Each time the bitset has a 1 in index i, the iterator will fetch data from the storage at index i and return it as an `Option`."],["UntypedComponentStore","Holds components of a given type indexed by `Entity`."],["UntypedResource","An untyped resource that may be inserted into [`UntypedResources`]."],["UntypedResourceInfo","Used to construct an [`UntypedResource`]."],["UntypedResources","Storage for un-typed resources."],["World","The [`World`] is simply a collection of [`Resources`], and [`ComponentStores`]."]],"trait":[["BitSet","The BitSet API."],["EcsData","Helper trait that is auto-implemented for anything that may be stored in the ECS’s untyped storage."],["IntoSystem","Converts a function into a [`System`]."],["RawFns","Helper trait that is auto-implemented for all `Clone`-able types. Provides easy access to drop and clone funcitons for raw pointers."],["SystemParam","Trait used to implement parameters for [`System`] functions."],["TypeUlid","Associates a [`Ulid`] ID to a Rust type."],["TypedEcsData","Helper trait that is auto-implemented for anything that may be stored in the ECS’s typed storage."]],"type":[["BitSetVec","The type of bitsets used to track entities in component storages. Mostly used to create caches."],["Comp","[`SystemParam`] for getting read access to a [`ComponentStore`]."],["CompMut","[`SystemParam`] for getting mutable access to a [`ComponentStore`]."],["SystemResult","The result of a `System`’s execution."],["UlidMap","Faster hash map using [`FxHashMap`] and a ULID key."]]};