import json
import random

# Open the JSON file in write mode
with open('/Users/hr.mac/Documents/GitHub/journalist_app/src/Components/Bubble_viz/Bubble_chart/data.json', 'w') as f:
    # Load the JSON data into a Python dictionary
    data = json.load(f)

    # Iterate over each item in the "data" list
    for item in data["data"]:
        # Add a new key "clicks" with a random value between 1 and 10
        item["clicks"] = random.randint(1000, 100000)

    # Write the updated dictionary back to the JSON file
    json.dump(data, f)

    print(f)
