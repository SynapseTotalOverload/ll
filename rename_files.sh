#!/bin/bash

# Function to rename files in a directory
rename_files_in_dir() {
    local dir="$1"
    echo "Processing directory: $dir"
    
    cd "$dir" || exit 1
    
    # Rename all files to lowercase with underscores
    for file in *; do
        if [ -f "$file" ]; then
            # Convert to lowercase and replace spaces with underscores
            new_name=$(echo "$file" | tr '[:upper:]' '[:lower:]' | sed 's/ /_/g')
            
            # Only rename if the name is different
            if [ "$file" != "$new_name" ]; then
                echo "Renaming: $file -> $new_name"
                mv "$file" "$new_name"
            fi
        fi
    done
    
    cd ..
}

# Process each directory
for dir in */; do
    if [ -d "$dir" ]; then
        rename_files_in_dir "$dir"
    fi
done

echo "All files have been renamed!"
