const useGetCalendarGitlab = (userName) => {
        const [data, setData] = useState({});
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          const fetchDataGitlab = async () => {
            try {
              const { data: response } = await axios.get('/stuff/to/fetch');
              setData(response);
            } catch (error) {
              console.error(error)
            }
            setLoading(false);
          };
      
          fetchDataGitlab();
        }, []);
      
        return {
          data,
          loading,
        };
      
    }
    export default useGetCalendarGitlab;