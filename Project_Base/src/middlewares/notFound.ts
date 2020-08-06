/**
 * @author Alejandro Pascual <alextkd@gmail.com> 01/08/2020
 */
export default ({ response }: { response: any }) => {
  response.status = 404;
  response.body = {
    success: false,
    message: "404 - Not found.",
  };
};
