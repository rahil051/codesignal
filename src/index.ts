{
	class Thing {
		_size = 0;

		get size(): number {
			return this._size;
		}

		set size(value: string | number | boolean) {
			let num = Number(value);

			// Don't allow NaN, Infinity, etc

			if (!Number.isFinite(num)) {
				this._size = 0;
				return;
			}

			this._size = num * num;
		}
	}

	const thing = new Thing();
	thing.size = 5;
	console.log(thing.size);
}
