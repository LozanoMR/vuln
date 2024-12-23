function searchDork(category) {
            const country = document.getElementById('country').value;
            let query = '';
            switch (category) {
                case 'admin': query = `inurl:admin login site:${country}`; break;
                case 'config': query = `filetype:env "DB_PASSWORD" site:${country}`; break;
                case 'camaras': query = `inurl:/view/view.shtml site:${country}`; break;
                case 'sql': query = `inurl:index.php?id= site:${country}`; break;
                case 'backup': query = `filetype:bak site:${country}`; break;
                case 'emails': query = `"@gmail.com" OR "@hotmail.com" OR "@yahoo.com" site:${country}`; break;
                case 'ftp': query = `"index of" "ftp" site:${country}`; break;
                case 'logs': query = `"index of" "logs" site:${country}`; break;
                case 'phpinfo': query = `ext:php intitle:phpinfo "published by the PHP Group" site:${country}`; break;
                case 'passwords': query = `intext:"password" filetype:txt site:${country}`; break;
                case 'wp-admin': query = `inurl:wp-admin site:${country}`; break;
                case 'database': query = `"index of" "database.sql" site:${country}`; break;
                case 'files': query = `"index of" "files" site:${country}`; break;
                case 'shell': query = `inurl:shell site:${country}`; break;
                case 'camera': query = `intitle:"Live View / - AXIS" site:${country}`; break;
                default: query = `site:${country}`;
            }
            document.getElementById('query').textContent = query;
            document.getElementById('searchLink').href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
      