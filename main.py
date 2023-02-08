import os
import json
import random


WAV_DIR_PATH = "src/assets/wavs"

def main():
    wav_list = []

    for root, dirs, files in os.walk(WAV_DIR_PATH):
   
        for file in files:
            if file.endswith('.wav'):
                print(os.path.split(root))

                
                wav_list.append(os.path.join(root.replace("src/", ""), file))

    random.shuffle(wav_list)

    item_dict = {}


    for wav_path in wav_list:

        file_id = os.path.splitext(os.path.basename(wav_path))[0]
        method_name = os.path.basename(os.path.abspath(os.path.join(wav_path, os.pardir)))

        item_dict[file_id] = {
            "method": method_name,
            "path": wav_path,
        }

    with open("src/assets/items.json", "w") as f:
        json.dump(item_dict, f, indent=2)
    
if __name__ == '__main__':
    main()
