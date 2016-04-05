
      <script type="text/javascript">

			function vehicleConstructor(name, wheels, passengers){
				name: name,
				wheels: wheels,
				passengers: passengers,
				makenoise = function makeNoise() {
					console.log('toot toot!')
				},
			}

			bike = new vehicleConstructor(bike, 2, 1) {
				makenoise = function makeNoise() {
					console.log('ring ring!')
				}
			}

			sedan = new vehicleConstructor(sedan, 4, 5) {
				makenoise = function makeNoise() {
					console.log('honk honk!')
				}
			}

			bus = new vehicleConstructor(bus, 8, 140) {
				pickUpPassengers = pickUpPassengers(number) {
					passengers += number;
				}
			}

      </script>
