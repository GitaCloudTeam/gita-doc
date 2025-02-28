#!/bin/bash

for file in *; do
    if [[ -f "$file" ]]; then
        # Captura o nome base e o número usando regex
        if [[ "$file" =~ ^([^0-9]*)([0-9]+)(\..*)?$ ]]; then
            prefix="${BASH_REMATCH[1]}"
            number="${BASH_REMATCH[2]}"
            extension="${BASH_REMATCH[3]}"
            new_name="${prefix}0${number}${extension}"
            
            # Renomeia apenas se o novo nome for diferente
            if [[ "$file" != "$new_name" ]]; then
                mv "$file" "$new_name"
                echo "Renomeado: $file -> $new_name"
            fi
        fi
    fi
done
