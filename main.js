console.log("test");

let old_ips = ['213.34.55.108', '31.151.18.93', '45.13.59.9', '87.214.254.116', '94.213.220.45', '190.2.137.102', '181.215.178.190', '185.45.112.112', '92.249.36.165', '5.2.74.210', '5.2.72.44', '178.62.243.208', '193.123.35.21', '212.178.153.226', '163.158.62.79', '167.71.79.65', '94.231.253.18', '194.5.207.126', '77.251.29.47', '217.62.173.160', '213.34.55.108', '31.151.18.93', '45.13.59.9', '87.214.254.116', '94.213.220.45', '190.2.137.102', '181.215.178.190', '185.45.112.112', '92.249.36.165', '5.2.74.210', '5.2.72.44', '178.62.243.208', '193.123.35.21', '212.178.153.226', '163.158.62.79', '167.71.79.65', '94.231.253.18', '194.5.207.126', '77.251.29.47', '217.62.173.160', '13.93.52.233', '94.157.26.128', '20.73.99.13', '77.162.169.1', '136.143.21.213', '194.87.252.200', '194.87.252.3', '83.161.142.246', '51.158.31.65', '51.15.50.91', '37.97.133.129', '81.207.163.165', '134.255.216.126', '185.235.41.60', '107.6.143.100', '80.60.32.20', '77.175.170.203', '66.248.194.86', '23.109.4.122', '217.103.58.44', '209.182.105.76', '66.248.194.99', '212.114.109.106', '193.23.161.15', '209.250.245.19', '86.85.143.189', '149.210.150.200', '213.93.156.189', '185.223.31.241', '83.149.104.72', '20.86.167.35', '37.97.229.54', '174.138.107.28', '188.166.119.51', '185.53.163.84', '13.80.13.84', '213.93.217.156', '5.2.74.10', '198.20.125.85', '37.97.246.223', '172.255.11.231', '213.222.13.40', '77.251.203.77', '209.182.105.87', '217.62.15.182', '31.20.150.73', '217.62.8.206', '31.204.152.126', '185.227.243.160', '83.84.229.87', '193.123.34.198', '195.85.49.10', '194.87.252.150', '80.101.238.213', '104.223.80.246', '23.109.64.36', '174.138.11.153', '194.87.252.222', '194.87.252.111', '217.105.39.234', '134.255.227.155', '194.87.252.160', '194.87.252.76', '172.255.12.60', '194.87.252.174', '130.89.162.228', '194.87.252.216', '194.36.102.148', '194.87.252.29', '194.87.252.183', '104.223.80.2', '185.220.175.204', '194.87.252.241', '66.248.194.157', '209.182.105.12', '217.120.255.179', '194.87.252.12', '23.100.8.136', '194.87.252.96', '194.87.252.105', '94.209.182.98', '194.87.252.6', '194.87.252.106', '193.34.69.180', '136.144.211.9', '172.255.10.187', '45.131.108.176', '38.39.201.22', '94.209.247.95', '84.107.150.127', '13.80.140.40', '194.87.252.74', '194.87.252.110', '84.86.163.121', '194.87.252.78', '45.138.231.251', '82.217.172.136', '83.80.135.223', '45.9.123.41', '77.162.171.21', '194.87.252.212', '81.206.85.15', '185.249.198.231', '104.223.80.146', '86.87.174.71', '45.156.84.136', '86.93.0.44', '5.79.76.88', '87.214.116.15', '134.255.217.40', '62.112.8.48', '194.87.252.205', '77.251.225.155', '31.214.141.212', '82.217.112.116', '24.132.172.79', '80.89.238.181', '131.153.21.196', '194.87.252.109', '82.168.210.134', '194.87.252.40', '104.223.80.203', '104.223.80.213', '62.131.119.175', '134.255.252.81', '86.90.59.179', '193.123.63.217', '185.239.239.111', '104.223.80.28', '194.87.252.82', '136.244.106.175', '66.248.194.190', '134.255.252.164', '145.90.96.243', '86.85.19.218', '194.87.252.184', '87.237.54.38', '194.87.252.23', '172.255.12.197', '178.62.237.226', '40.115.37.188', '92.42.44.185', '86.82.6.36', '212.83.170.84', '192.227.223.53', '5.255.86.67', '194.62.157.221', '94.212.45.111', '85.150.102.90', '194.87.252.224', '23.109.64.37', '84.245.8.150', '185.251.237.240', '77.170.114.153', '66.248.194.118', '94.212.50.247', '80.56.120.27', '188.227.85.105', '194.87.252.143', '13.80.1.47', '194.87.252.19', '77.175.199.8', '5.79.76.79', '51.136.104.63', '185.223.31.162', '92.42.46.25', '85.145.22.181', '77.167.120.250', '194.87.252.44', '31.151.100.143', '81.16.136.25', '194.87.252.70', '191.96.103.73', '20.82.49.218', '185.181.8.94', '194.87.252.64', '194.87.252.128', '194.87.252.58', '51.15.0.245', '104.248.205.209', '87.237.55.158', '194.87.252.90', '194.87.252.229', '45.141.36.186', '86.92.83.179', '37.48.104.196', '163.158.12.67', '149.210.163.27', '213.5.65.15', '167.71.64.116', '194.87.252.127', '136.144.190.121', '163.172.210.2', '194.87.252.116', '194.87.252.95', '194.87.252.123', '94.213.163.82', '84.106.251.249', '62.251.118.102', '45.13.227.49', '85.17.164.116', '13.95.211.153', '217.121.178.179', '185.56.138.236', '213.199.138.79', '194.87.252.38', '89.220.156.140', '20.76.84.117', '185.95.14.167', '92.42.44.199', '194.87.252.20', '194.87.252.193', '194.87.252.233', '77.160.106.150', '86.92.17.11', '89.35.88.173', '143.177.169.10', '37.34.56.117', '194.87.252.98', '194.87.252.152', '35.204.246.120', '77.170.3.198', '66.248.196.89', '62.166.198.177', '20.50.197.184', '66.248.194.15', '194.87.252.201', '45.9.123.29', '194.87.252.103', '83.85.160.113', '104.223.80.251', '82.74.191.86', '194.87.252.119', '185.223.30.52', '23.109.4.182', '84.105.64.183', '194.87.252.31', '88.214.57.167', '13.73.146.153', '94.208.181.129', '62.165.71.185', '194.87.252.218', '52.174.55.178', '2.58.113.208', '185.56.138.122', '194.87.252.139', '193.23.127.203', '217.103.191.226', '83.85.21.155', '40.118.2.49', '82.169.224.11', '194.87.252.214', '37.75.227.19', '134.255.216.82', '159.180.24.172', '85.148.3.198', '84.104.147.47', '194.87.252.249', '92.42.45.199', '86.93.118.122', '194.87.252.158', '20.76.177.172', '85.145.205.222', '94.211.101.128', '84.247.9.133', '185.239.239.253', '185.169.199.91', '83.83.29.135', '82.163.40.104', '31.187.169.85', '194.87.252.134', '83.162.155.23', '66.248.196.221', '136.143.118.238', '94.213.123.141', '92.109.178.120', '194.87.252.25', '20.73.157.1', '104.223.80.155', '217.101.143.113', '185.224.144.124', '82.95.105.189', '81.206.110.236', '194.87.252.154', '92.108.97.21', '89.35.88.85', '37.0.86.102', '206.189.97.235', '194.87.252.114', '198.20.115.175', '86.94.49.240', '86.93.184.149', '194.87.252.30', '94.212.122.97', '188.166.109.130', '194.87.252.53', '35.204.59.96', '209.182.105.86', '77.242.115.99', '62.194.207.186', '82.95.67.15', '45.131.108.30', '165.22.206.225', '62.131.73.24', '13.95.109.238', '80.57.72.212', '194.87.252.92', '84.24.230.20', '84.106.238.48', '194.87.252.137', '45.152.209.9', '77.249.144.25', '89.35.88.148', '213.127.170.162', '217.102.202.53', '217.122.155.216', '34.91.0.110', '194.87.252.108', '83.82.198.210', '194.87.252.141', '84.30.212.91', '80.56.110.85', '83.161.243.233', '194.87.252.235', '185.117.3.207', '107.6.175.58', '194.87.252.147', '34.90.43.83', '37.139.12.247', '85.146.56.168', '46.244.21.4', '194.156.88.68', '77.249.175.2', '62.194.219.143', '62.251.80.252', '198.211.119.45', '87.237.54.214', '217.123.122.246', '45.13.227.99', '66.248.196.97', '194.87.252.195', '84.86.243.169', '188.166.14.214', '81.204.111.236', '194.87.252.170', '143.178.139.97', '194.87.252.210', '212.84.156.45', '89.98.120.251', '194.87.252.2', '194.87.252.142', '82.75.161.73', '83.83.243.84', '85.148.75.164', '194.87.252.211', '194.87.252.219', '51.15.54.149', '77.160.106.244', '143.178.5.61', '157.245.66.14', '162.249.170.26', '131.153.7.234', '155.94.247.107', '34.67.175.177', '45.150.51.88', '100.15.159.193', '24.253.54.81', '51.15.21.7', '134.255.227.230', '146.59.134.248', '79.9.86.125', '118.27.115.133', '192.253.202.102', '72.200.9.107', '66.220.166.81', '157.90.64.25', '88.64.148.180', '45.132.89.245', '93.104.208.52', '194.135.23.53', '162.249.170.26', '131.153.7.234', '155.94.247.107', '34.67.175.177', '45.150.51.88', '100.15.159.193', '24.253.54.81', '51.15.21.7', '134.255.227.230', '146.59.134.248', '79.9.86.125', '118.27.115.133', '192.253.202.102', '72.200.9.107', '66.220.166.81', '157.90.64.25', '88.64.148.180', '45.132.89.245', '93.104.208.52', '194.135.23.53', '147.135.95.129', '198.143.140.18', '158.62.200.11', '69.23.91.154', '94.250.195.187', '192.98.249.233', '38.64.242.115', '62.78.244.127', '37.114.39.82', '100.16.156.207', '92.32.154.118', '76.164.195.121', '158.69.139.28', '118.27.117.197', '118.27.11.26', '73.170.201.28', '158.174.251.19', '66.235.174.163', '174.125.112.90', '85.215.92.234', '1.253.225.141', '151.80.7.165', '46.226.109.20', '173.92.210.163', '217.182.0.180', '202.61.252.119', '51.68.194.102', '87.147.89.89', '194.87.219.130', '213.213.240.229', '71.10.5.189', '63.250.52.219', '109.238.12.113', '96.244.41.103', '45.139.113.54', '205.72.90.117', '5.103.209.16', '50.47.106.158', '45.141.196.37', '62.171.132.140', '212.253.125.222', '192.98.248.211', '51.83.242.49', '185.113.135.9', '91.121.73.34', '46.105.33.80', '211.117.207.135', '2.58.113.56', '173.44.53.191', '66.190.155.78', '85.164.228.97', '66.249.230.206', '151.80.106.57', '68.37.59.249', '90.91.175.37', '45.151.91.116', '108.243.220.208', '51.210.237.233', '51.222.69.6', '192.98.251.149', '185.118.180.94', '174.17.12.132', '46.4.84.54', '176.57.149.36', '85.190.163.5', '205.99.38.233', '186.20.149.133', '92.9.240.187', '173.233.154.10', '92.97.139.139', '45.43.15.170', '142.44.206.142', '45.139.113.29', '51.222.54.238', '176.57.167.215', '135.125.172.21', '94.250.195.38', '193.124.8.179', '185.175.9.149', '62.7.36.146', '185.185.26.252', '205.88.139.185', '205.99.1.91', '92.117.41.179', '76.21.193.137', '104.152.140.24', '165.227.84.238', '66.11.118.109', '5.9.68.6', '157.230.227.109', '54.172.117.182', '208.94.242.162', '147.135.41.233', '67.169.19.170', '67.241.214.136', '51.91.132.77', '193.124.8.131', '68.49.103.230', '193.84.88.175', '163.172.111.114', '68.171.31.4', '213.202.247.87', '24.150.131.163', '192.98.251.47', '217.160.27.40', '45.89.143.122', '149.34.6.244', '64.40.8.46', '93.70.31.45', '68.183.192.178', '77.237.1.111', '152.228.179.58', '176.57.144.191', '45.79.141.175', '76.218.237.172', '108.62.233.138', '194.13.82.116', '209.182.105.66', '51.79.56.233', '205.72.92.101', '68.2.214.114', '82.196.112.232', '95.104.60.204', '194.87.199.208', '185.71.67.9', '94.127.54.134', '51.79.216.22', '76.164.200.11', '45.93.251.99', '66.75.5.151', '31.167.165.228', '15.222.2.99', '192.98.249.139', '164.132.158.217', '54.39.1.10', '45.139.114.121', '209.97.147.85', '149.56.170.86', '135.148.9.239', '193.84.88.166', '34.64.180.192', '138.201.101.42', '5.133.27.126', '167.114.211.72', '173.72.193.224', '135.148.11.179', '5.230.28.76', '2.57.9.38', '50.126.65.177', '193.233.63.176', '144.91.113.72', '93.19.55.246', '173.44.53.242', '104.223.99.229', '192.98.251.53', '104.223.107.200', '176.52.128.42', '35.247.207.115', '51.222.17.61', '216.160.28.148', '99.232.57.178', '176.213.65.20', '172.103.214.136', '205.86.35.108', '51.195.13.126', '118.27.36.128', '104.238.220.206', '45.142.177.234', '51.161.98.219', '185.71.67.58', '104.219.7.109', '145.239.139.68', '37.157.252.184', '147.135.51.139', '185.216.179.24', '74.96.176.199', '62.77.152.108', '35.237.59.41', '91.145.198.245', '193.233.15.242', '135.148.56.85', '193.124.8.163', '103.22.146.20', '45.151.91.180', '51.161.56.243', '176.57.183.122', '176.159.163.176', '164.132.222.189', '150.95.147.110', '198.55.118.212', '80.193.253.164', '37.114.36.208', '174.138.8.235', '193.41.237.13', '12.32.166.4', '193.124.8.231', '14.45.160.33', '51.178.208.39', '37.59.143.160', '212.54.222.147', '194.87.199.226', '77.185.118.150', '51.254.185.143', '192.154.224.205', '82.64.115.173', '79.250.185.235', '23.251.87.96', '178.33.174.249', '174.100.115.136', '90.126.97.64', '181.16.107.119', '45.179.41.6', '204.197.5.77', '5.252.32.85', '54.39.235.27', '24.44.187.110', '176.57.145.130', '193.123.59.204', '31.208.161.252', '192.98.248.161', '66.248.199.95', '51.222.103.52', '145.239.137.241', '104.11.196.227', '193.233.63.89', '194.87.219.2', '192.98.250.142', '67.164.214.70', '193.124.8.117', '185.232.68.67', '13.236.92.16', '37.53.79.17', '45.159.183.43', '75.142.9.242', '205.72.101.203', '193.233.15.66', '213.32.117.199', '84.227.96.118', '37.120.170.20', '51.81.72.114', '46.5.20.180', '45.129.182.74', '62.104.93.146', '161.97.122.1', '118.27.108.179', '176.57.144.248', '121.44.242.58', '62.104.170.51', '192.98.248.50', '51.255.33.202', '86.57.152.111', '73.119.159.35', '93.207.30.102', '54.37.198.0', '194.59.205.24', '54.215.2.16', '79.109.56.237', '66.70.128.22', '66.235.175.198', '185.236.136.211', '204.74.238.166', '174.82.169.222', '175.141.30.189', '192.46.216.251', '82.64.35.213', '192.98.249.247', '194.87.219.40', '85.14.205.106', '131.153.57.21', '5.252.32.5', '62.78.92.161', '145.130.239.140', '173.44.59.234', '51.222.101.204', '34.236.121.112', '51.81.120.160', '34.213.125.96', '107.1.127.82', '88.198.49.252', '143.110.160.159', '51.254.187.50', '118.104.112.17', '52.196.151.109', '135.148.84.65', '146.59.25.80', '104.223.80.111', '78.82.212.183', '173.237.77.41', '104.143.3.197', '157.7.133.78', '185.137.121.183', '176.191.253.49', '89.163.223.100', '90.187.99.81', '164.132.206.96', '68.82.41.144', '173.249.45.98', '71.81.72.197', '217.79.188.183', '37.19.209.102', '185.150.190.185', '49.48.205.66', '45.154.50.186', '84.180.246.73', '62.20.255.38', '79.143.180.117', '193.233.63.181', '78.196.73.174', '162.84.163.3', '31.214.211.43', '73.50.101.196', '45.151.91.60', '45.62.241.47', '5.62.116.124', '54.157.126.81', '193.124.8.138', '142.252.253.29', '51.81.113.123', '162.55.13.13', '194.87.199.245', '76.102.185.6', '118.27.118.212', '71.244.241.204', '174.94.108.124', '66.248.195.121', '45.43.15.222', '51.89.185.150', '179.4.0.102', '76.71.65.213', '183.104.3.202', '51.195.231.234', '173.179.196.207', '91.245.28.12', '37.114.39.212', '193.233.63.12', '192.169.44.136', '71.94.65.12', '149.56.232.37', '69.14.158.68', '51.89.158.214', '153.126.187.169', '176.57.155.152', '45.154.49.94', '192.98.250.204', '167.86.112.50', '66.70.135.69', '24.113.229.124', '51.81.173.141', '87.79.153.25', '213.133.101.6', '43.251.163.149', '51.83.148.10', '45.151.91.192', '192.98.250.48', '51.222.135.87', '149.202.65.235', '59.169.150.229', '59.6.36.204', '177.12.226.238', '142.202.220.40', '73.247.35.199', '173.33.108.206', '118.154.119.169', '139.99.144.154', '193.233.15.232', '108.170.22.134', '109.13.146.129', '34.64.219.183', '51.81.121.83', '185.189.49.59', '173.179.72.10', '99.226.149.22', '210.1.198.112', '51.195.2.46', '94.250.198.96', '147.135.95.229', '31.151.80.116', '209.205.112.218', '150.66.106.110', '178.128.65.63', '100.21.249.120', '192.98.250.71', '195.133.193.130', '84.144.172.17', '66.193.131.56', '94.134.2.217', '94.250.206.98', '34.231.195.147', '54.38.208.232', '94.250.195.172', '194.97.165.72', '2.186.15.216', '85.214.152.54', '194.87.219.101', '71.175.104.127', '165.227.32.181', '194.87.204.44', '185.163.118.42', '51.210.45.247', '51.89.215.74', '147.12.169.195', '84.211.83.157', '176.57.151.238', '54.39.222.182', '194.87.199.143', '193.233.15.17', '209.182.192.226', '185.137.121.88', '172.105.21.166', '142.44.254.68', '5.252.34.127', '135.148.14.200', '173.44.59.136', '72.135.119.59', '173.212.236.237', '109.103.237.138', '102.132.231.181', '135.148.64.233', '99.17.6.148', '24.157.129.244', '58.87.142.116', '54.94.94.49', '177.80.33.245', '1.237.124.44', '73.50.167.224', '76.164.204.249', '103.62.50.4', '46.21.221.228', '51.195.141.171', '94.250.206.69', '192.99.70.61', '85.214.94.46', '71.57.88.159', '174.112.182.220', '91.121.91.137', '194.87.199.7', '47.41.93.2', '192.99.208.3', '45.151.91.110', '167.114.176.87', '91.167.162.205', '34.95.57.23', '83.150.35.51', '66.70.236.132', '50.43.0.99', '193.124.8.186', '194.87.219.75', '176.57.176.162', '51.81.60.223', '192.98.250.188', '87.230.19.148', '104.128.51.27', '178.32.145.106', '84.167.210.254', '71.12.35.183', '82.125.42.244', '120.151.93.82', '198.55.98.148', '192.154.248.37', '40.127.172.251', '104.238.205.104', '51.79.123.229', '121.152.112.73', '205.71.94.129', '193.233.63.133', '79.204.104.54', '185.216.25.182', '35.176.46.127', '51.81.170.186', '13.57.216.224', '193.233.15.78', '104.143.3.192', '221.155.199.107', '135.23.4.135', '159.203.163.44', '205.64.21.159', '51.83.149.19', '68.119.26.230', '139.99.180.119', '90.2.94.100', '160.72.174.130', '194.87.204.26', '35.204.234.134', '161.97.86.21', '192.98.249.173', '176.57.175.97', '31.127.90.35', '216.36.169.178', '185.113.135.52', '74.133.5.5', '73.236.104.90', '83.82.83.145', '85.165.89.56', '178.62.77.199', '174.115.42.5', '68.80.117.140', '137.74.163.121', '47.185.170.36', '176.57.145.193', '202.88.64.51', '204.238.213.182', '150.136.167.79', '185.113.135.72', '109.169.58.25', '24.85.18.194', '178.248.247.229', '139.99.171.54', '205.73.94.150', '66.171.178.222', '195.4.19.124', '161.8.72.181', '91.138.75.198', '85.190.166.82', '73.179.210.165', '96.230.16.191', '51.79.136.122', '188.138.70.154', '193.124.8.171', '73.34.148.220', '69.133.64.166', '98.240.161.4', '136.49.1.191', '194.150.108.171', '45.132.125.42', '46.4.95.68', '51.81.6.112', '157.230.82.38', '198.24.180.99', '151.225.96.56', '147.135.90.90', '108.4.7.141', '148.251.220.100', '158.51.210.241', '91.233.76.88', '191.111.30.176', '178.88.35.60', '209.127.180.74', '85.145.232.171', '94.250.210.190', '194.87.199.254', '184.54.131.230', '162.83.176.107', '194.135.23.152', '104.219.2.234', '192.98.250.83', '192.98.249.24', '98.122.136.85', '205.72.249.132', '155.94.247.38', '198.27.125.46', '193.233.63.81', '79.234.39.211', '37.48.118.204', '107.173.53.2', '51.89.146.214', '62.104.144.62', '81.197.85.61', '135.148.29.95', '194.87.219.136', '138.201.120.175']
let new_ips = ['177.54.147.61', '189.237.39.252', '177.55.67.41', '192.95.45.9', '189.159.184.13', '199.189.131.136', '189.142.233.172', '172.65.101.34', '189.15.184.12', '63.237.57.222', '94.248.205.228', '144.217.77.26', '45.32.44.38', '188.93.18.118', '172.65.110.220', '210.113.48.189', '60.50.81.159', '180.73.34.108', '67.255.12.74', '49.12.113.151', '177.54.147.61', '189.237.39.252', '177.55.67.41', '192.95.45.9', '189.159.184.13', '199.189.131.136', '189.142.233.172', '172.65.101.34', '189.15.184.12', '63.237.57.222', '94.248.205.228', '144.217.77.26', '45.32.44.38', '188.93.18.118', '172.65.110.220', '210.113.48.189', '60.50.81.159', '180.73.34.108', '67.255.12.74', '49.12.113.151', '119.10.190.67', '5.98.214.162', '113.156.117.209', '45.181.190.102', '41.182.75.151', '199.96.246.166', '24.178.198.70', '118.100.70.224', '212.104.164.232', '104.243.38.169', '183.97.160.67', '121.123.87.242', '86.87.221.64', '206.225.246.50', '124.142.105.165', '131.153.5.181', '61.109.17.240', '158.101.218.251', '93.86.242.129', '121.148.247.183', '27.119.99.85', '5.188.66.207', '178.164.177.182', '116.12.126.174', '221.155.199.107', '54.39.137.164', '5.15.183.172', '14.48.93.233', '219.92.25.33', '176.194.189.50', '187.13.8.32', '213.221.55.122', '187.168.67.31', '210.121.189.62', '171.229.109.29', '189.190.103.237', '94.130.128.10', '223.204.178.143', '31.30.119.250', '85.57.223.6', '220.82.144.236', '172.250.98.9', '210.186.123.38', '218.147.135.116', '211.15.18.241', '50.99.230.136', '181.177.245.2', '86.201.177.28', '185.8.185.237', '213.133.109.150', '59.151.212.137', '88.99.171.11', '202.44.240.71', '45.33.99.202', '201.172.225.210', '165.227.210.30', '134.41.59.56', '180.11.15.159', '198.24.162.34', '66.70.164.57', '121.7.193.253', '187.190.255.63', '161.97.120.66', '107.190.26.116', '1.32.2.197', '218.209.54.67', '49.170.214.74', '14.207.8.139', '14.36.97.128', '84.53.239.45', '193.32.223.104', '45.76.180.81', '192.99.63.128', '115.240.0.65', '47.220.233.242', '23.253.254.24', '135.249.193.214', '46.175.70.82', '47.91.40.237', '199.182.189.104', '45.138.253.94', '87.222.132.203', '221.158.106.250', '91.150.107.88', '187.136.85.224', '14.142.34.209', '104.237.234.64', '80.232.219.210', '161.8.73.192', '122.43.179.91', '131.153.5.178', '45.81.233.188', '78.46.201.252', '82.208.17.52', '95.217.225.28', '87.203.84.219', '90.177.244.15', '61.246.33.126', '109.235.189.72', '60.49.107.111', '131.153.5.182', '183.88.214.220', '109.95.202.194', '12.180.205.42', '204.44.125.16', '189.159.71.189', '180.250.107.174', '149.202.87.30', '46.101.249.183', '121.177.168.126', '24.176.59.224', '170.244.220.208', '119.160.132.241', '193.104.87.248', '172.65.106.156', '118.36.250.30', '92.181.133.74', '188.212.101.110', '1.238.155.201', '14.63.98.79', '187.235.100.197', '50.237.236.82', '59.1.45.101', '194.84.25.38', '109.173.232.88', '89.212.239.185', '145.40.50.175', '178.74.108.46', '54.39.243.227', '121.121.214.53', '37.205.14.132', '221.157.42.106', '80.137.67.234', '50.39.205.34', '51.79.82.172', '158.69.22.222', '78.155.59.107', '66.69.77.150', '59.27.195.23', '89.29.208.109', '125.253.114.106', '197.249.230.86', '140.238.13.194', '76.191.17.233', '211.198.139.56', '121.121.163.115', '98.223.127.116', '178.164.221.213', '54.39.87.144', '31.151.18.213', '186.89.227.196', '183.83.180.65', '49.49.54.44', '219.124.106.39', '192.166.196.50', '185.208.220.48', '217.197.166.64', '193.205.82.6', '101.167.168.148', '189.161.244.24', '39.111.160.162', '189.148.121.224', '210.223.25.32', '188.212.102.153', '210.213.212.45', '81.231.79.212', '41.60.218.142', '45.179.21.21', '218.101.140.3', '139.180.141.9', '190.2.137.102', '194.55.13.163', '147.135.4.40', '39.121.124.150', '94.21.100.38', '166.169.249.142', '180.72.198.106', '5.185.42.47', '180.231.62.111', '121.123.79.120', '81.171.27.101', '20.106.166.151', '61.109.26.174', '178.166.44.158', '108.51.205.188', '172.65.114.237', '202.160.17.137', '65.21.233.122', '175.138.81.116', '187.246.242.185', '59.17.46.111', '212.93.117.25', '101.140.32.29', '91.243.164.196', '188.165.198.144', '117.123.151.143', '61.247.101.147', '24.72.101.228', '122.202.149.252', '85.114.19.26', '175.144.33.23', '158.69.120.16', '60.128.4.249', '221.153.10.10', '101.255.63.130', '129.226.196.62', '212.156.144.202', '202.188.127.71', '5.148.43.202', '159.118.123.59', '54.39.155.44', '54.39.227.175', '54.39.155.35', '54.39.155.50', '54.39.155.34', '54.39.155.42', '54.39.155.41', '54.39.155.37', '54.39.155.43', '54.39.155.39', '54.39.155.36', '54.39.155.47', '209.126.100.196', '209.126.117.92', '50.116.53.26', '50.116.59.250', '131.221.164.20', '188.138.9.212', '188.143.214.21', '103.121.197.34', '103.124.147.34', '106.248.251.23', '106.243.107.47', '121.121.96.79', '121.121.218.140', '121.123.65.71', '121.121.114.105', '121.121.107.128', '121.121.82.200', '121.121.94.27', '121.123.79.126', '121.121.232.109', '121.123.45.166', '121.123.79.121', '121.121.140.157', '121.121.107.175', '121.123.48.175', '121.121.116.146', '121.122.71.52', '121.123.79.56', '121.123.77.245', '121.123.85.229', '121.123.77.173', '121.122.88.254', '170.245.95.4', '108.49.114.24', '222.101.92.165', '14.207.150.8', '14.207.75.19', '14.207.1.218', '200.31.177.148', '188.246.66.181', '103.212.223.53', '103.216.59.229', '103.212.236.6', '103.212.222.239', '68.183.150.143', '93.86.163.221', '116.81.64.253', '1.255.42.136', '114.23.248.190', '201.170.117.102', '144.178.129.225', '190.92.4.238', '175.194.151.146', '69.164.222.91', '104.223.15.250', '104.223.15.239', '104.223.15.61', '185.238.123.32', '187.171.24.2', '187.170.40.11', '85.27.185.147', '85.25.207.19', '85.24.161.249', '185.169.199.84', '80.72.14.49', '80.72.11.26', '209.183.174.10', '46.126.170.33', '220.76.107.106', '35.172.33.86', '35.174.241.196', '35.170.58.118', '80.89.209.51', '80.80.168.36', '59.10.104.27', '142.4.219.77', '89.37.218.227', '89.37.218.228', '58.71.192.244', '58.71.221.166', '58.71.208.109', '58.71.214.90', '58.71.194.71', '64.119.29.210', '178.248.87.46', '193.201.194.20', '198.211.27.108', '85.234.105.70', '217.6.155.222', '175.144.204.201', '175.145.198.44', '175.144.149.171', '76.12.148.27', '85.209.252.11', '187.137.207.75', '187.138.85.61', '187.140.190.112', '187.141.138.21', '161.35.229.41', '161.35.102.240', '185.45.112.112', '185.44.235.44', '51.254.94.160', '54.39.28.68', '2.58.117.5', '158.69.22.222', '187.194.239.225', '189.164.186.218', '172.65.127.236', '54.91.38.123', '37.187.18.135', '175.127.124.57', '84.81.130.57', '112.161.99.185', '23.92.22.109', '23.94.98.187', '35.225.128.160', '35.232.185.222', '35.239.252.54', '35.239.25.173', '85.66.141.215', '217.211.115.15', '193.205.82.2', '24.184.106.44', '66.228.35.205', '66.228.34.59', '188.222.151.59', '194.55.13.163', '101.180.18.222', '14.183.72.86', '62.32.76.50', '161.0.133.172', '161.8.102.189', '84.33.118.142', '84.42.228.205', '167.142.91.25', '175.126.161.75', '195.201.170.157', '99.48.201.156', '169.255.24.229', '121.134.105.8', '103.168.52.212', '103.165.243.13', '103.164.83.58', '184.82.231.158', '90.79.223.116', '192.99.63.128', '175.137.149.142', '1.176.147.183', '213.82.249.236', '80.254.126.116', '49.48.204.113', '49.48.89.218', '49.48.8.212', '54.209.114.10', '54.208.156.73', '210.186.157.139', '176.214.81.21', '171.4.105.201', '77.119.248.176', '46.209.220.230', '46.217.164.126', '46.209.28.87', '78.85.20.62', '185.96.125.94', '185.96.125.71', '185.104.61.199', '185.96.126.73', '185.103.109.126', '185.96.125.76', '185.96.126.72', '211.185.138.199', '40.143.25.247', '75.132.242.133', '41.182.78.175', '188.40.239.143', '188.40.239.135', '188.40.239.137', '188.40.177.111', '188.40.239.136', '188.40.239.141', '188.40.239.40', '188.40.195.193', '188.40.224.12', '188.40.231.200', '188.40.239.132', '188.40.224.44', '188.40.239.33', '188.40.195.202', '188.40.23.7', '188.40.195.210', '188.40.224.1', '188.40.231.207', '188.40.224.8', '188.40.225.102', '188.40.23.10', '188.40.164.112', '188.40.239.35', '188.40.23.1', '188.40.177.101', '188.40.224.33', '188.40.177.114', '188.40.224.36', '188.40.239.134', '188.40.195.205', '188.40.177.113', '188.40.224.7', '188.40.225.114', '188.40.164.107', '188.40.224.32', '188.40.164.101', '188.40.177.108', '188.40.239.37', '188.40.225.110', '188.40.164.105', '188.40.177.105', '188.40.224.37', '188.40.239.36', '188.40.225.117', '188.40.195.201', '188.40.164.103', '188.40.195.209', '188.40.224.4', '188.40.224.46', '188.40.224.6', '188.40.177.103', '188.40.224.5', '188.40.225.104', '188.40.225.108', '188.40.239.38', '188.40.224.38', '188.40.195.198', '188.40.195.194', '188.40.224.2', '188.40.225.103', '188.40.231.193', '188.40.23.3', '188.40.224.11', '188.40.224.9', '188.40.177.100', '188.40.239.39', '188.40.195.195', '188.40.224.14', '188.40.164.106', '188.40.195.206', '188.40.195.203', '188.40.164.109', '188.40.195.196', '188.40.239.45', '188.40.239.46', '188.40.177.106', '188.40.225.106', '188.40.164.114', '188.40.225.113', '188.40.23.13', '188.40.231.198', '188.40.164.113', '188.40.231.202', '188.40.23.14', '188.40.195.204', '188.40.231.199', '188.40.225.101', '188.40.164.110', '188.40.239.47', '188.40.239.42', '188.40.177.109', '188.40.239.44', '188.40.225.118', '188.40.23.8', '188.40.164.99', '188.40.224.35', '188.40.224.41', '188.40.239.41', '188.40.195.208', '188.40.23.5', '188.40.231.205', '188.40.164.108', '188.40.225.115', '188.40.224.47', '188.40.177.102', '188.40.224.13', '188.40.23.12', '188.40.177.112', '188.40.225.111', '188.40.239.34', '188.40.231.206', '188.40.195.199', '188.40.225.112', '188.40.224.40', '188.40.177.110', '188.40.23.4', '188.40.231.204', '188.40.224.10', '188.40.164.104', '188.40.239.32', '104.168.171.209', '85.172.12.196', '75.55.122.172', '133.114.116.182', '92.203.47.69', '195.228.119.95', '83.238.167.192', '196.89.30.42', '201.155.71.35', '92.154.42.10', '14.50.116.178', '211.238.233.69', '178.143.50.243', '122.160.15.158', '122.170.13.114', '122.160.142.219', '122.168.202.96', '122.166.147.236', '207.6.236.134', '49.174.168.156', '112.197.1.63', '112.198.22.138', '89.73.139.83', '84.198.209.54', '13.228.77.79', '13.229.51.88', '13.229.100.225', '13.232.66.83', '13.229.239.114', '13.228.21.153', '207.246.81.228', '200.117.155.121', '165.76.148.232', '50.30.35.216', '120.146.40.119', '186.250.37.241', '91.170.197.187', '91.170.1.67', '91.165.85.25', '91.170.138.158', '91.170.105.4', '91.167.4.69', '91.171.159.242']
const serverlist = document.getElementById("servers")


const default_img = "data:image/png;base64,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"

async function getServers(){
    for(i = 0; i < old_ips.length; i++){
        // console.log(ipadressen[i])
        let ip = old_ips[i]
        fetch(`https://api.minetools.eu/ping/${old_ips[i]}/25565`)
        .then(response => response.json())
        .then(data => {
            if(!data["error"]){
                // console.log(data)
                document.getElementById("servers").innerHTML += `        
                <div id="server" class="${data.players.online}" >
                    <img src="${(data.favicon) ? data.favicon : default_img}" alt="">
                    <h3 onclick="copy(this)">${ip}</h3>
                    <p>Players: ${data.players.online}</p>
                    <span>${data.version.name}</span>
                </div>`
                filter()
            }
        }
        );
    }
    document.getElementById("loading").style.display = "none"
}

function copy(that){
    var inp =document.createElement('input');
    document.body.appendChild(inp)
    inp.value = that.textContent
    console.log(that);
    inp.select();
    document.execCommand('copy',false);
    inp.remove();
    that.animate([
        // keyframes
        { color: "#00B4F6" },
        { color: 'black' }
      ], {
        // timing options
        duration: 1000,
        iterations: 1
    });
}

function filter(){
    if(document.getElementById("players").checked){
        servers = document.getElementsByClassName("0")
        for(i = 0; i < servers.length; i++){
            servers[i].style.display = "none"
        }
    } else {
        servers = document.getElementsByClassName("0")
        for(i = 0; i < servers.length; i++){
            servers[i].style.display = "grid"
        }
    }
}

getServers()